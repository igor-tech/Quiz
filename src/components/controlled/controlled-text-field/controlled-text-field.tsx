import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/textfield/TextField'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = Omit<
  TextFieldProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const ControlledTextField = <TFieldValues extends FieldValues>({
  control,
  name,
  ...props
}: ControlledTextFieldProps<TFieldValues>) => {
  const {
    field: { ...field },
    fieldState: { error },
  } = useController({ control, name })

  return <TextField {...props} {...field} error={error?.message} id={name} />
}
