
type ProfileCardProps = {
  cardImageURL:string;  
  name: string;
  description: string;
  category: string;
}

type SelectCategoryProps = {
  value: string[];
  onChange: (val: string[]) => void;
}