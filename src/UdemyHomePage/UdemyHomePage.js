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
      <UdemyCourses />
    </div>
  );
}
export default UdemyHomePage;
