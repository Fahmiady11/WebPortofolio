import React from "react";
import ItemExperience from "./ItemExperience";

export default function ListExperience(second) {
	return (
		<>
			<div className="w-auto md:w-11/12">
				<ol className="relative border-l border-gray-200 dark:border-gray-700">
					<ItemExperience
						title="Software Developer"
						date="Juli 2023 - Present"
						decs ={
							<ul className="list-disc pl-4">
								<li>
									Developed and maintained academic and admissions (PMB) modules using native PHP, used by over 300 universities across Indonesia.
								</li>
								<li>
									Resolved bugs and implemented new features with an on-time delivery rate of approximately 80%, aligned with project timelines.
								</li>
								<li>
									Created and refined 9 types of custom reports for each institution, consistently completing an average of 50 tasks per month in accordance with contractual SLA.
								</li>
								<li>
									Increased company revenue by delivering custom report redesign services based on institutional requests with new formatting requirements.
								</li>
							</ul>
						}
						latest={true}
					/>
					<ItemExperience
						title="Frontend Development"
						date="December 2022 - December 2023"
						decs={
							<ul className="list-disc pl-4">
								<li>
									Developed an information system project inspired by Traveloka,
									featuring tourism, culinary, accommodation, transportation,
									and local crafts across the Madura region, as part of an
									initiative to promote local businesses and increase university
									revenue.
								</li>
								<li>
									Built the frontend interface using ReactJS and Tailwind CSS to
									enhance development efficiency and design consistency.
								</li>
								<li>
									Collaborated with the backend team to develop RESTful APIs,
									ensuring seamless integration with the web interface.
								</li>
							</ul>
						}
					/>
					{/* <ItemExperience
						title="Front End Development Intern"
						date="September 2022 - December 2022"
						decs="In the Bangbeli Internship Program, internal participants will be faced with Project-Based learning methods, work on real projects at Bangbeli and are responsible for solving these problems, get enrichment materials from companies to develop skills, and get regular guidance from mentors."
					/> */}
					<ItemExperience
						title="Front End Engineering Bootcamp Student"
						date="February 2022 - July 2022"
						decs={
							<ul className="list-disc pl-4">
								<li>
									Ruangguru collaborates with Merdeka Campus as a step to
									realize these opportunities through the Independent Study
									program. Creating high-quality websites and dynamic
									applications to provide the best user experience is critical
									to increasing the competitiveness of a product or service.
								</li>
							</ul>
						}
					/>
					<ItemExperience
						title="Lab Assistant"
						date="July 2021 - July 2022"
						decs={
							<ul className="list-disc pl-4">
								<li>
									Responsible as an intermediary of knowledge from lecturers to
									students in practicum activities by providing material,
									guiding, and evaluating students in one class of web
									application programming, Database I, Database II, introductory
									information technology.
								</li>
							</ul>
						}
					/>
				</ol>
			</div>
		</>
	);
}
