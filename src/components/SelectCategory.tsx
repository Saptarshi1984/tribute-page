"use client"

import { useState } from "react"
import {
  createListCollection,
  type ListCollection,
  type CollectionItem,
  Portal,
  Select,
} from "@chakra-ui/react"




interface SelectCategoryProps {
  value: string[]
  onChange: (val: string[]) => void
  collection: ListCollection<CollectionItem>
}


const SelectCategory = ({value, onChange, collection}:SelectCategoryProps) => {

  const [selected, setSelected] = useState<string[]>(['all']);

  return (

        <Select.Root               
        size="sm" minW="320px"
        collection={collection}        
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
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
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
