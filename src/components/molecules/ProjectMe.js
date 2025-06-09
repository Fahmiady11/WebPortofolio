import React from "react";
import ProjectCard from "./ProjectCard";
//project
//1.codein
import homeCodein from "../../assets/image/project/codein/homepage.png";
import detailBCodein from "../../assets/image/project/codein/detailblog.png";
import detailFCodein from "../../assets/image/project/codein/detailforum.png";
import inputF from "../../assets/image/project/codein/inputforum.png";
import listB from "../../assets/image/project/codein/listblog.png";
//2.SnakeGame
import snakeGame from "../../assets/image/project/snakegame/gameSnake.png";
//3.todolist
import todoList from "../../assets/image/project/todolist/todolist.png";
//4.calculator
import calculator from "../../assets/image/project/calculator/calculator.png";
//5.restourant
import resto1 from "../../assets/image/project/restourant/resto.png";
import resto2 from "../../assets/image/project/restourant/resto2.png";
//8.Tictactou
import ttt from "../../assets/image/project/tictactou/tictac.png";
//9.lanjalan
import Lanjalan1 from "../../assets/image/project/lanjalan/image1.png";
import Lanjalan2 from "../../assets/image/project/lanjalan/image2.png";
import Lanjalan3 from "../../assets/image/project/lanjalan/image3.png";
import Lanjalan4 from "../../assets/image/project/lanjalan/image4.png";
import Lanjalan5 from "../../assets/image/project/lanjalan/image5.png";
//11.pokemon
import pokemon from "../../assets/image/project/pokemon/pokemon1.png";
//12.skripsi
import skripsi1 from "../../assets/image/project/skripsi/skripsi1.png";
import skripsi2 from "../../assets/image/project/skripsi/skripsi2.png";
//13.cbt
import cbt1 from "../../assets/image/project/cbt/cbt1.png";
import cbt2 from "../../assets/image/project/cbt/cbt2.png";
import cbt3 from "../../assets/image/project/cbt/cbt3.png";
import cbt4 from "../../assets/image/project/cbt/cbt4.png";
import cbt5 from "../../assets/image/project/cbt/cbt5.png";
import cbt6 from "../../assets/image/project/cbt/cbt6.png";


export default function ProjectMe(props) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 overflow-auto h-full ">
        <ProjectCard
          image={[cbt4, cbt1, cbt2, cbt3, cbt5, cbt6]}
          decs="The Computer Based Test (CBT) website is used as a means for students to carry out Pre-Tests and Post-Tests, and also helps teachers to compile questions, monitor student progress in real-time, and evaluate exam results more efficiently through an automated system."
          title="Computer Based Test"
          tag={["CodeIgniter 4", "Tailwind"]}
          isGithub={false}
          isWebsite={false}
          linkGithub=""
          linkWebsite=""
        />
        <ProjectCard
          image={[Lanjalan1, Lanjalan2, Lanjalan3, Lanjalan4, Lanjalan5]}
          decs="Lanjalan is a website that has the goal of introducing tourism, culinary and lodging located in the Madura area as well as being able to make travel, lodging and culinary bookings."
          title="Lanjalan"
          tag={["React", "Tailwind", "Laravel"]}
          isGithub={false}
          isWebsite={true}
          linkGithub=""
          linkWebsite="https://aleng-fe-fahmiady11.vercel.app/"
        />
        <ProjectCard
          image={[listB, homeCodein, detailBCodein, detailFCodein, inputF]}
          decs="CodeIn is a platform created to make it easy for Indonesian programmers to interact to solve problems or provide useful information for other programmers."
          title="CodeIn"
          tag={["React", "Tailwind", "GO"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/streamlit_deploy2/"
          linkWebsite="https://fahmiskripsi2.streamlit.app/"
        />
        <ProjectCard
          image={[skripsi1, skripsi2]}
          decs="A website project created to predict the selling price of Madura batik, with 4 parameters (Cloth Price, Production Time, Motif, Coloring) as the determinant. This project uses Fuzzy Mamdani and Genetic Algorithm"
          title="Batik Selling Price Prediction"
          tag={["Python", "Streamlit"]}
          isGithub={true}
          isWebsite={true}
          linkGithub=""
          linkWebsite="https://aleng-fe-fahmiady11.vercel.app/"
        />
        <ProjectCard
          image={[snakeGame]}
          decs="The snake game that I have made is a browser game, there are already levels, Level and Life Challenges, so it is fun to play."
          title="Snake Game"
          tag={["HTML", "CSS", "JS"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/se-fe6-kelompok8"
          linkWebsite="https://rg-km.github.io/se-fe6-kelompok8/"
        />
        <ProjectCard
          image={[pokemon]}
          decs="Simple website with pokemon API consumption"
          title="Pokemon"
          tag={["React", "Tailwind", "Zustand"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/pokemon-go"
          linkWebsite="https://fahmiady11.github.io/pokemon-go/"
        />
        <ProjectCard
          image={[todoList]}
          decs="TodoList is a Wwebsite for us to be able to manage time well, we can manage the day we want to do any activity, or as a reminder,
          this website uses React and can CRUD related unfinished and completed work."
          title="TodoList"
          tag={["React", "ChakraUI", "Zustand"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/TodoList_progate"
          linkWebsite="https://reactprogatefahmi.netlify.app/"
        />
        <ProjectCard
          image={[calculator]}
          decs="This Website Calculator is a website using HTML, CSS and native javascript, this Calculator is a simple calculator
          which can be added, subtracted, multiplied and divided."
          title="Calculator"
          tag={["HTML", "CSS", "JS"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/calculator_Progate_FGA"
          linkWebsite="https://fahmiady11.github.io/calculator_Progate_FGA/"
        />
        <ProjectCard
          image={[ttt]}
          decs="This Tictactou game is a browser game, made using React and Tailwind Style, in this game there are features of the number of wins and draws"
          title="Tictactou"
          tag={["React", "Tailwind"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/Tictactou-React"
          linkWebsite="https://tictactou.netlify.app/"
        />
      </div>
    </>
  );
}
