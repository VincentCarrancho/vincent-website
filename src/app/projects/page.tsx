import React from "react";
import ProjectCard from "./_project_component/projectcard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

function ProjectsPage() {
  return (
    <div>
      <h1>My Projects and Related Experience</h1>

      <div>
        <section>
          <h1>Work Experience</h1>
          <ProjectCard
            locked={false}
            name={"Salesforce Summer '23"}
            href="https://help.salesforce.com/s/articleView?id=release-notes.rn_security_pe_key_management_accessibility.htm&release=246&type=5"
          >
            <h3>Main Accomplishment</h3>
            <div>
              {`Improved the accessibility and UI of Salesforce\'s web application
              and impacted over 100+ customers of this service such as Apple,
              Uber, Mariott, etc.`}
            </div>
            <h3>What I did</h3>
            <div>
              <ul>
                <li>
                  Spearheaded development of web pages to empower customers in
                  managing encryption keys (data security).
                </li>
                <li>
                  Improved Salesforce web app accessibility by fixing 4 issues
                  through UI framework migration (Java, Javascript, HTML, CSS).
                </li>
                <li>
                  Collaborated with engineers to create robust code and
                  documented UI migration process for future reference.
                </li>
                <li>
                  Addressed accessibility bugs (resizing errors, UI behavior) to
                  improve user experience.
                </li>
                <li>
                  Migrated Salesforce UI to Lightning Design System and Aura
                  framework for a modern, user-friendly interface.
                </li>
                <li>
                  Refined design and functionality of specific pages through UI
                  rework initiatives (feedback, iteration, implementation).{" "}
                </li>
                <li>
                  Contributed to changes deployed in Salesforce Winter ’24
                  release, demonstrating impact on platform development.
                </li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard locked={false} name={"MetLife Summer '22"}>
            <h3>Main Accomplishment</h3>
            <div>
              Upgraded a 10+ year old application and converted it to a modern
              web application that showed over 40% increase in runtime
              performance.
            </div>
            <h3>What I did</h3>
            <div>
              <ul>
                <li>
                  Developed full-stack application for visualizing corporate
                  billing reports at MetLife.
                </li>
                <li>
                  Migrated legacy, slow Microsoft Excel script (30+ seconds
                  runtime) to a faster Java-based application.{" "}
                </li>
                <li>
                  Reduced application runtime by 40% through code optimization
                  and leveraging async/multithreaded nature of Java.
                </li>
                <li>
                  Built Spring Boot REST API to retrieve and analyze data from
                  IBM DB2 SQL Database.
                </li>
                <li>
                  Utilized React for a performant frontend with pagination to
                  prevent data overload and improve user experience.
                </li>
              </ul>
            </div>
          </ProjectCard>
        </section>
        <section>
          <h1>Projects</h1>
          <ProjectCard
            locked={false}
            name={"STARS GPT Spring '24"}
            href="https://stars-gpt-frontend-testing.onrender.com/"
          >
            <h3>Description</h3>
            <div>
              {`Led a team of 5 developers in creating a fullstack web application for my school\’s tutoring group. The application is a tutoring chatbot designed to help students and tutors with their education. This project uses Langchain, OpenAI API, FastAPI, Supabase, React (using Vite as the build tool), docker, and Render.com to deploy (we successfully used AWS EC2 and Azure VMs but settled on using Render's container hosting).`}
            </div>
            <h3>{`Here\'s what I did:`}</h3>
            <div>
              <ul>
                <li>
                  Created system architecture and design for the application
                  including the database schema, API endpoints, and frontend
                  components.
                </li>
                <li>
                  Developed the frontend with React using ShadCN for as the
                  design system for the application.
                </li>
                <li>
                  Implemented the Langchain and OpenAI Logic for the chatbot API
                  functionality.
                </li>
                <li>
                  Implemented a Singleton model to reduce costs everytime the
                  chatbot response is invoked by the user.
                </li>
                <li>
                  {`Deployed backend API on multiple cloud services such as AWS
                  EC2, Azure VMs, and Docker Containers (ended up using
                  Render.com\'s container hosting).`}
                </li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard
            locked={true}
            name={"Arthas AI"}
            href="https://help.salesforce.com/s/articleView?id=release-notes.rn_security_pe_key_management_accessibility.htm&release=246&type=5"
          >
            <h3>{`Here\'s what I did:`}</h3>
            <div>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat, accusamus!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vero explicabo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo doloremque incidunt animi alias perferendis.
                </li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard name={"ChaRizzMa: Dating Tracker"} locked={true}>
            <h3>{`Here\'s what I did:`}</h3>
            <div>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat, accusamus!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vero explicabo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo doloremque incidunt animi alias perferendis.
                </li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard name={"Hotel iPad Check-In System"} locked={true}>
            <h3>{`Here\'s what I did:`}</h3>
            <div>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat, accusamus!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vero explicabo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo doloremque incidunt animi alias perferendis.
                </li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard
            name={"FIU Panthers Protecting Panthers Prototype"}
            locked={true}
          >
            <h3>{`Here\'s what I did:`}</h3>
            <div>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat, accusamus!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vero explicabo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo doloremque incidunt animi alias perferendis.
                </li>
              </ul>
            </div>
          </ProjectCard>
        </section>
      </div>
    </div>
  );
}

export default ProjectsPage;
