import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <div>
      <Button variant={"apnaStyle"} size={"lg"}>Click me</Button>
      <br /><br /><br /><br />
      <Input type="email" placeholder="Email" height={"20px"}  width={"20px"}/>
    </div>

  )
}
