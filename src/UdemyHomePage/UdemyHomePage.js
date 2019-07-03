import React from "react";
import UdemyHeader from "../UdemyHeader/UdemyHeader";
import UdemyMenu from "../UdemyMenu/UdemyMenu";
import UdemyAdds from "../UdemyAdds/UdemyAdds";
import UdemyCourses from "../UdemyCourses/UdemyCourses";

function UdemyHomePage() {
  return (
    <div>
      <UdemyHeader />
      <UdemyMenu />
      <UdemyAdds />
      <UdemyCourses
        title="What to learn next"
        text1="Because you viewed"
        link=" Deep Learning A-Z™: Hands-On Artificial Neural Networks"
        image="https://i.udemycdn.com/course/750x422/980086_196d_2.jpg"
        text2="Deep Learning Prerequisites:The Num..."
        text3="Lazy Programmer Inc."
        views="4.5 (12,443)"
        fee="Free"
        link1="https://thebulletin.org/wp-content/uploads/2018/06/Landing-Page-AI-Twitter.jpg"
        text4="Artificial Intelligence A-Z Learn How To Build.."
        text5="Hadelin de Ponteves, Kirill Erem..."
        views1="4.4 (10,371)"
        link2="https://i.udemycdn.com/course/750x422/1080408_2645_3.jpg"
        text6="Artificial Intelligence: Reinforcement Learning.."
        text7="Lazy Programmer Inc."
        views2="4.6 (4,468)"
        link3="https://i.udemycdn.com/course/750x422/918390_02a6.jpg"
        text8="Natural Language Processing with Deep.."
        text9="Lazy Programmer Inc."
        views3="4.6 (3,349)"
        link4="https://i.udemycdn.com/course/750x422/772462_d385.jpg"
        text10="Modern Deep Learning in Python.."
        text11="Lazy Programmer Inc."
        views4="4.6 (1, 707)"
      />
      <UdemyCourses
        text1="Featured courses in"
        link=" Amazon AWS"
        image="https://i.udemycdn.com/course/750x422/1921420_384a_5.jpg"
        text2="Ulitmate AWS Certificate Developer Associate 201.."
        text3="Stephane Maarek | AWS Certificate...."
        views="4,6(5,937)"
        fee="500"
        link1="https://i.udemycdn.com/course/750x422/1691532_c76b_7.jpg"
        text4="AWS Lambda & Serverless Architecture Bootcamp..."
        text5="Riyaz Sayyad"
        views1="4.6(429)"
        link2="https://i.udemycdn.com/course/750x422/852510_7912_2.jpg"
        text6="AWS Certified Cloud Practitioner 2019"
        text7="Zeal Vora"
        views2="4.4 (5,264)"
        link3="https://s3.amazonaws.com/akbarhussain-repository/images/aws-certified-cloud-practitioner-certification-experience-1.jpg"
        text8="Become an AWS Certified Cloud Practitioner: 2019"
        text9="Qasim Shah"
        views3="4.3 (67)"
        link4="https://i.udemycdn.com/course/750x422/1570972_abb7.jpg"
        text10="Continuous Development using Spinnaker on AWS..."
        text11="Edward Viaene, Jorn Jambers"
        views4="4.4 (273)"
      />
      <UdemyCourses
        text1="Students are viewing"
        image="https://i.udemycdn.com/course/750x422/1219332_bdd7.jpg"
        text2="Artificial Intelligence A-Z: Learn How To Build..."
        text3="Hadelin de Ponteves, Kirill Erem..."
        views="4,4(10,371)"
        fee="500"
        link1="https://i.udemycdn.com/course/750x422/567828_67d0.jpg"
        text4="Complete Python Bootcamp: Go from Zero..."
        text5="Jose Portilla"
        views1="4.5(163,663)"
        link2="https://i.udemycdn.com/course/750x422/625204_436a_2.jpg"
        text6="The Web Developer Bootcamp"
        text7="Colt Steele"
        views2="4.7 (125, 975)"
        link3="https://i.udemycdn.com/course/750x422/914296_3670_8.jpg"
        text8="The Complete Digital Marketing course - 12..."
        text9="Rob Percival, Daragh Walsh, Cod..."
        views3="4.5 (55,374)"
        link4="https://i.udemycdn.com/course/750x422/793796_0e89.jpg"
        text10="Microsoft Excel - Excel from Beginner to..."
        text11="Kyle Pew"
        views4="4.6 (60, 454)"
      />
      <UdemyCourses
        text1="Because you searched for "
        link=" react js"
        image="https://i.udemycdn.com/course/750x422/1845808_23fc_4.jpg"
        text2="Master Vuejs from scratch (incl Vuex, Vue Router)"
        text3="Kati Frantz"
        views="4,7(144)"
        fee="500"
        link1="https://i.udemycdn.com/course/750x422/1639836_a03e_3.jpg"
        text4="Build Web Apps with Vue JS 2 & Firebase"
        text5="Shaun Pelling"
        views1="4.8(1,828)"
        link2="https://i.udemycdn.com/course/750x422/1047968_aff4_2.jpg"
        text6="Vue JS 2:From Beginners to professional (includes..."
        text7="Bo Andersen"
        views2="4.6 (653)"
        link3="https://i.udemycdn.com/course/750x422/1208638_2604.jpg"
        text8="React JS, Angular & Vue JS - Quickstart &..."
        text9="Maximilian Schwarzmuller, Acad..."
        views3="4.7 (1,640)"
        link4="https://i.udemycdn.com/course/750x422/995016_ebf4.jpg"
        text10="Vue JS 2 - The Complete Guide (incl. Vue Router ..."
        text11="Maximilian Schwarzmuller"
        views4="4.7 (27,469)"
      />
    </div>
  );
}
export default UdemyHomePage;
