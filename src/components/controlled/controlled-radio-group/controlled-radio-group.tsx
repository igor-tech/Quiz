import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

export type ControlledRadioGroupProps<TFieldValues extends FieldValues> = Omit<
  RadioGroupProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>({
  control,
  name,
  ...props
}: ControlledRadioGroupProps<TFieldValues>) => {
  const {
    field: { onChange, ...filed },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup
      {...props}
      {...filed}
      errorMessage={error?.message}
      id={name}
      onValueChange={onChange}
    />
  )
}
