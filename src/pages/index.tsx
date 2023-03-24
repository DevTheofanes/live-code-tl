import { Users } from "@/components";
import { GlobalProvider } from "@/context";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <GlobalProvider>
        <Users />
      </GlobalProvider>
    </Container>
  )
}
