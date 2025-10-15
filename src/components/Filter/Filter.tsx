import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TextInput, ActionIcon, Text, Pill } from "@mantine/core";
import { useAppDispatch } from "../../hooks/redux";
import {
  setSearchParams as setReduxSearchParams,
  fetchVacancies,
} from "../../store/slices/vacanciesSlice";
import { IconPlus } from "@tabler/icons-react";
import styles from "./Filter.module.scss";

export function SkillsInput() {
  const dispatch = useAppDispatch();
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([
    "TypeScript",
    "React",
    "Redux",
  ]);
  const [searchParams, setUrlSearchParams] = useSearchParams();

  useEffect(() => {
    const skillsParams = searchParams.getAll("skill_set");

    if (skillsParams.length > 0) setSkills(skillsParams);
  }, [searchParams]);

  const updateURLParams = (newSkills: string[]) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("skill_set");
    newSkills.forEach((skill) => newParams.append("skill_set", skill));

    setUrlSearchParams(newParams);
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      setNewSkill("");

      updateURLParams(updatedSkills);

      dispatch(setReduxSearchParams({ skill_set: updatedSkills }));
      dispatch(
        fetchVacancies({
          skill_set: updatedSkills,
          industry: "7",
          professional_role: "96",
          per_page: 10,
        })
      );
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updatedSkills);

    updateURLParams(updatedSkills);

    dispatch(setReduxSearchParams({ skill_set: updatedSkills }));
    dispatch(
      fetchVacancies({
        skill_set: updatedSkills,
        industry: "7",
        professional_role: "96",
        per_page: 10,
      })
    );
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addSkill();
    }
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.asideСontainer}>
        <Text size="sm" fw={500} mb="xs" className={styles.asideLabel}>
          Ключевые навыки
        </Text>

        <div className={styles.inputGroup}>
          <TextInput
            placeholder="Навык"
            value={newSkill}
            onChange={(event) => setNewSkill(event.currentTarget.value)}
            onKeyPress={handleKeyPress}
            classNames={{ input: styles.inputSkill }}
          />
          <ActionIcon
            variant="filled"
            color="blue"
            className={styles.addButton}
            onClick={addSkill}
          >
            <IconPlus size={16} />
          </ActionIcon>
        </div>

        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <Pill
              key={skill}
              withRemoveButton
              onRemove={() => removeSkill(skill)}
              className={styles.skillChip}
            >
              {skill}
            </Pill>
          ))}
        </div>
      </div>
    </aside>
  );
}
