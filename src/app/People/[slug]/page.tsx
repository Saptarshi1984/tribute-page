import PeopleDetailsClientWrapper from "@/components/PeopleDetailsClientWrapper"
import { getLuminariesData } from "@/app/utils/data";

interface PDprops {
    params: { slug: string };
}

interface Person {
  name: string;
  slug: string;
  cardImageURL: string;
  description: string;
  LifeStory: string;
}

const PeopleDetails = async ({params}:PDprops) => {

  const slugName= (await params).slug;
  const people= getLuminariesData() as Person[];
  const person = people.find(p => p.slug == slugName); 
  
  if (!person) return <div>Person not found</div>;

  return (

    <div>
      <PeopleDetailsClientWrapper person ={person} />
    </div>
    
  )
}

export default PeopleDetails
