import React from "react";
import ItemExperience from "./ItemExperience";

export default function ListExperience(second) {
  return (
    <>
      <div className="w-auto md:w-11/12">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <ItemExperience
            title="PART TIME WEBSITE LANJALAN UTM"
            date="December 2022 - Present"
            decs="Working on Website Interfaces such as Traveloka with coverage of tourism, culinary, lodging, transportation, crafts in the Madura region."
            latest={true}
          />
          <ItemExperience
            title="Front End Development Intern"
            date="September 2022 - December 2022"
            decs="In the Bangbeli Internship Program, internal participants will be faced with Project-Based learning methods, work on real projects at Bangbeli and are responsible for solving these problems, get enrichment materials from companies to develop skills, and get regular guidance from mentors."
          />
          <ItemExperience
            title="Front End Engineering Bootcamp Student"
            date="February 2022 - July 2022"
            decs="Ruangguru collaborates with Merdeka Campus as a step to realize these opportunities through the Independent Study program. Creating high-quality websites and dynamic applications to provide the best user experience is critical to increasing the competitiveness of a product or service."
          />
          <ItemExperience
            title="Lab Assistant"
            date="July 2021 - July 2022"
            decs="Responsible as an intermediary of knowledge from lecturers to students in practicum activities
            by providing material, guiding, and evaluating students in one class of web application programming, Database I, Database II, introductory information technology."
          />
        </ol>
      </div>
    </>
  );
}
