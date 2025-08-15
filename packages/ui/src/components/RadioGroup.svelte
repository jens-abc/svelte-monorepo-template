	
<script lang="ts">
  import '../app.css';
  import {
    RadioGroup,
    Label,
    type WithoutChildrenOrChild,
    useId,
  } from "bits-ui";
 
  type Item = {
    value: string;
    label: string;
    disabled?: boolean;
  };
 
  type Props = WithoutChildrenOrChild<RadioGroup.RootProps> & {
    items: Item[];
  };
 
  let {
    value = $bindable(""),
    ref = $bindable(null),
    items,
    ...restProps
  }: Props = $props();
</script>

<RadioGroup.Root bind:value bind:ref {...restProps} class="flex  gap-4 text-sm font-medium">
  {#each items as item}
    {@const id = useId()}
    <div
        class="text-foreground group flex select-none items-center transition-all"
    >
      <RadioGroup.Item {id} value={item.value} disabled={item.disabled}
      class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default border transition-all duration-100 ease-in-out">

      </RadioGroup.Item>
      <Label.Root for={id} class="pl-3">{item.label}</Label.Root>
    </div>
  {/each}
</RadioGroup.Root>

