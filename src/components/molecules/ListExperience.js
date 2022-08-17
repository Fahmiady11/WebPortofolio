import React from 'react';
import ItemExperience from './ItemExperience';

export default function ListExperience(second) {
  return (
    <>
      <div className="w-auto md:w-11/12">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <ItemExperience
            title="Front End Engineering Bootcamp Student"
            date="February 2022 - July 2022"
            decs="Ruangguru collaborates with Merdeka Campus as a step to realize these opportunities through the Independent Study program. Creating high-quality websites and dynamic applications to provide the best user experience is critical to increasing the competitiveness of a product or service."
            latest={true}
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
