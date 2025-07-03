"use client"
import { Portal, Select, createListCollection } from "@chakra-ui/react"

const frameworks = createListCollection({
  items: [
    { label: "All", value: "all" },
    { label: "Literature & Arts", value: "literature" },
    { label: "Science & Innovations", value: "science" },
    { label: "Cinema & Culture", value: "culture" },
    { label: "Spirituality", value: "spirituality" },
    { label: "Revoloutionaries", value: "revoloutionaries" },
    { label: "Global Achivers", value: "globalachivers" },
  ],
})

const SelectCategory = () => {
  return (

        <Select.Root collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      {/* <Select.Label>Select framework</Select.Label> */}
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select Category" />
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
