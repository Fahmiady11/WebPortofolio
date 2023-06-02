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
//6.webtix
import webtix1 from "../../assets/image/project/webtix/webtix1.png";
import webtix2 from "../../assets/image/project/webtix/webtix2.png";
import webtix3 from "../../assets/image/project/webtix/webtix3.png";
//7.Lapetshop
import lapet1 from "../../assets/image/project/lapetshop/pet1.png";
import lapet2 from "../../assets/image/project/lapetshop/pet2.png";
import lapet3 from "../../assets/image/project/lapetshop/pet3.png";
//8.Tictactou
import ttt from "../../assets/image/project/tictactou/tictac.png";
//9.lanjalan
import Lanjalan1 from "../../assets/image/project/lanjalan/image1.png";
import Lanjalan2 from "../../assets/image/project/lanjalan/image2.png";
import Lanjalan3 from "../../assets/image/project/lanjalan/image3.png";
import Lanjalan4 from "../../assets/image/project/lanjalan/image4.png";
import Lanjalan5 from "../../assets/image/project/lanjalan/image5.png";
//10.profileImage
import profile1 from "../../assets/image/project/profileImage/4.png";
import profile2 from "../../assets/image/project/profileImage/1.png";
import profile3 from "../../assets/image/project/profileImage/2.png";
import profile4 from "../../assets/image/project/profileImage/3.png";
import profile5 from "../../assets/image/project/profileImage/5.png";
import profile6 from "../../assets/image/project/profileImage/6.png";
import profile7 from "../../assets/image/project/profileImage/7.png";
import profile8 from "../../assets/image/project/profileImage/8.png";
import profile9 from "../../assets/image/project/profileImage/9.png";
import profile10 from "../../assets/image/project/profileImage/10.png";

export default function ProjectMe(props) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 overflow-auto h-full ">
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
          isWebsite={false}
          linkGithub="https://github.com/Fahmiady11/CodeIn_RuangGuru"
          linkWebsite=""
        />
        <ProjectCard
          image={[
            profile4,
            profile1,
            profile2,
            profile3,
            profile5,
            profile6,
            profile7,
            profile8,
            profile9,
            profile10,
          ]}
          decs="a website-based application project with the feature of changing profile photos with camera devices, and cropping photos from the camera before uploading."
          title="Profile Image"
          tag={["React", "Tailwind"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/profileTest"
          linkWebsite="https://profilecameracrop.netlify.app/"
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
          image={[webtix1, webtix2, webtix3]}
          decs="Webtix is ​​a Website-based ticket booking, this website is made in the PHP Native programming language
          This system already uses an API so that it knows the current and upcoming films, then to
          the reservation itself can choose the movie, the number of tickets, the time and the seat."
          title="Webtix website"
          tag={["HTML", "PHP", "API"]}
          isGithub={true}
          isWebsite={false}
          linkGithub="https://github.com/Fahmiady11/Sistem-informasi-WEBTIX"
          linkWebsite=""
        />
        <ProjectCard
          image={[lapet1, lapet3, lapet2]}
          decs="Lapetshop is a website for buying and selling animal needs from food, medicine, toys, accessories and care, this system uses
          laravel in the making."
          title="Lapetshop"
          tag={["HTML", "Laravel", "PHP"]}
          isGithub={true}
          isWebsite={false}
          linkGithub="https://github.com/Fahmiady11/lapetshop_web"
          linkWebsite=""
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
          image={[resto1, resto2]}
          decs="This website is a simple website which consists of a home page and a detail page, but it's already there
          filter products based on open and close, and also based on the maximum price of the product."
          title="Restourant website"
          tag={["React", "CSS"]}
          isGithub={true}
          isWebsite={true}
          linkGithub="https://github.com/Fahmiady11/FrontendDevReactjs-Sekawan-Muhammad-fahmi-ady-susilo"
          linkWebsite="https://restourantfahmi.netlify.app/"
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
