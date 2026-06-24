import getSkills from "../../controller/getSkills";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const skillsData = await getSkills();
            setSkills(skillsData);
        }
        fetchData();
    }, []);

    return (
        <>
            <main>
                <h1>Skills</h1>
                <section id="skillsSection">
                    <ul>
                        {skills
                            ? skills.map((s) => {
                                  return (
                                      <li key={s.name}>
                                          <Icon icon={s.icon} color="white" />

                                          <article>
                                              <h3>{s.name}</h3>
                                              <div className="skillExperience">
                                                  <span>Experience :</span>
                                                  <div className="progressBarSkills">
                                                      <div
                                                          style={{
                                                              width: `${s.score}%`,
                                                          }}
                                                      ></div>
                                                  </div>
                                              </div>
                                          </article>
                                      </li>
                                  );
                              })
                            : ""}
                    </ul>
                </section>
            </main>
        </>
    );
}
