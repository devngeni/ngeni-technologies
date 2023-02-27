import TeamImage from "../../public/TeamImage.svg";

type DataType = {
    [key: string]: string;
  };
export const data: DataType[]  = [
  {
    image: TeamImage,
    name: "Dennis",
    title: "Software Engineer",
    description: "Cohort III engineer already handling key projects ",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    testimonial:
      "I got to hear about NGENI Indensity Program while in the last semester of my Undergraduate gave it a shot. The best decision ever!",
  },
  {
    image: TeamImage,
    name: "Becky",
    title: "UI Designer",
    description: "Cohort IX engineer in training ",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",

  },
  {
    image: TeamImage,
    name: "Vincent",
    title: "DevOps Engineer",
    description: "Cohort I Management",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    testimonial:
      "I got to hear about NGENI Indensity Program while in the last semester of my Undergraduate gave it a shot. The best decision ever!",
  },
  {
    image: TeamImage,
    name: "John",
    title: "UI Designer",
    description: "Cohort VII Designer already handling key projects",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
];


const hyphenateWords = (data: DataType[]): DataType[] => {
    const newData: DataType[] = [];
  
    data.forEach((item) => {
      const newItem = {} as DataType;
  
      for (const [key, value] of Object.entries(item)) {
        if (typeof value === 'string') {
          newItem[key] = value.replace(/(\S{15})(\S{1,})/g, '$1-$2');
        } else {
          newItem[key] = value;
        }
      }
  
      newData.push(newItem);
    });
  
    return newData;
  };
  
  export const hyphenatedData: DataType[] = hyphenateWords(data);