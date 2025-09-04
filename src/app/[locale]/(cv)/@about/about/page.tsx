import AboutMeCard from "@/components/about/about-me-card";
import MessageForm from "@/components/forms/message-form";
import PageWrapper from "@/components/layout/page-wrapper";
import Card from "@/components/utils/card";
import {
  verifyAuthSession,
} from "@/db/auth";
import {
  getUserById,
} from "@/db/dao/user";

const AboutPage = async () => {
  const {
    user,
  } = await verifyAuthSession();

  let userEmail;
  if (user) {
    const dbUser = getUserById(+user.id);
    userEmail = dbUser?.email;
  }

  return (
    <PageWrapper
      className="pt-30 mx-0!"
    >
      <div
        className="flex items-center lg:items-start gap-10 w-full flex-col lg:flex-row"
      >
        <AboutMeCard />

        <Card>
          <MessageForm
            userEmail={userEmail}
            userId={user ? +user.id : undefined}
          />
        </Card>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
