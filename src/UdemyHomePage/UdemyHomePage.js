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
      />
      <UdemyCourses
        text1="Featured courses in"
        link=" Amazon AWS"
        image="https://i.udemycdn.com/course/750x422/1921420_384a_5.jpg"
      />
    </div>
  );
}
export default UdemyHomePage;
