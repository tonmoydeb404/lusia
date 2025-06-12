import { profile } from "@/db/profile";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="container pt-20">
      <p>© 2025 {profile.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
