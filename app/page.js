import DashboardLayout from "../components/layout/DashboardLayout";
import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";
import Container from "../components/ui/Container";
import ChatBox from "../components/chat/ChatBox";

export default function Home() {
  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      header={<Header />}
    >
      <Container>
        <ChatBox />
      </Container>
    </DashboardLayout>
  );
}
