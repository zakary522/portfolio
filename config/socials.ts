import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@zakary522",
    icon: Icons.gitHub,
    link: "https://github.com/zakary522",
  },
  {
    name: "LinkedIn",
    username: "Zakary Overmyer",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/zakary-overmyer-3aa855393/",
  },
  // {
  //   name: "Twitter",
  //   username: "@zakary522",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/zakary522",
  // },
  {
    name: "Gmail",
    username: "zakaryovermyer818",
    icon: Icons.gmail,
    link: "mailto:zakaryovermyer818@outlook.com",
  },
];
