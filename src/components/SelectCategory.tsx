"use client"
import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { useState } from "react"

const frameworks = createListCollection({
  items: [
    { label: "All", value: "all" },
    { label: "Literature & Arts", value: "literature" },
    { label: "Science & Innovations", value: "science & innovations" },
    { label: "Cinema & Culture", value: "cinema & culture" },
    { label: "Spirituality", value: "spirituality" },
    { label: "Freedom Fighter", value: "freedom fighter" },
    { label: "Global Achivers", value: "globalachivers" },
    { label: "Law & Justice", value: "law & justice" },
    { label: "Social Reformer", value: "social reformer" },
  ],
})

  interface SelectCategoryProps {
  value: string[];
  onChange: (val: string[]) => void;
}


const SelectCategory = ({value, onChange}:SelectCategoryProps) => {

  const [selected, setSelected] = useState<string[]>(['all']);

  return (

        <Select.Root               
        size="sm" width="320px"
        collection={frameworks}        
        value={selected}
        defaultValue={['all']}
        onValueChange={(e) => {setSelected(e.value);
        onChange(e.value)}}
        >
      <Select.HiddenSelect />
      {/* <Select.Label>Select framework</Select.Label> */}
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>

  )
}

export default SelectCategory;
