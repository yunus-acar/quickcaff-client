import Description from "@/components/description";
import { Button } from "@/components/ui/button";
import Title from "@/components/title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QuickCaff - Hızlı ve Kolay Kahve Seçimi",
  description: `En sevdiğiniz kahveyi bulmak hiç bu kadar keyifli olmamıştı! QuickCaff
          ile iş yerinizdeki enerji ihtiyacınıza uygun kahveyi bulun ya da kahve
          dünyasının lezzetli notalarını keşfederek damak zevkinize en uygun
          seçenekleri belirleyin.`,
};

const Home = async () => {
  return (
    <main>
      <div className="max-w-5xl mx-auto text-center p-padding">
        <Title title="Hızlı ve Kolay Kahve Seçimi" />
        <Description description="En sevdiğiniz kahveyi bulmak hiç bu kadar keyifli olmamıştı! QuickCaff ile iş yerinizdeki enerji ihtiyacınıza uygun kahveyi bulun ya da kahve dünyasının lezzetli notalarını keşfederek damak zevkinize en uygun seçenekleri belirleyin." />

        <div className="mt-8 space-x-4">
          <Button className="bg-brand-primary text-white rounded-brand p-3">
            <Link href={"/jobs"}>İşinize Uygun Kahve</Link>
          </Button>
          <Button className="bg-brand-secondary text-white rounded-brand p-3">
            <Link href={"/coffees?key=temperature"}>
              Lezzet Profili ile Keşif
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
