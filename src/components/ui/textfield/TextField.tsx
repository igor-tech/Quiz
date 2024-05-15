import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close } from '@/assets/icons/components/close'
import { Eye } from '@/assets/icons/components/eye'
import { EyeOff } from '@/assets/icons/components/eye-off'
import { Search } from '@/assets/icons/components/search'
import { useGetId } from '@/components/ui/textfield/useGetId'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type InputType = 'password' | 'search' | 'text'

export type TextFieldProps = {
  clearField?: () => void
  error?: string
  label?: string
  type?: InputType
} & ComponentPropsWithoutRef<'input'>

export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  ({ clearField, disabled, error, id, label, type = 'text', ...restProps }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const classNames = {
      clearButton: clsx(s.clearButton, disabled && s.buttonDisabled),
      container: s.textFieldWrapper,
      error: s.errorWrapper,
      errorCaption: s.errorCaption,
      input: clsx(
        s.input,
        error && s.errorInput,
        type === 'password' && s.passwordInput,
        type === 'search' && s.searchInput
      ),
      inputWrapper: s.inputWrapper,
      label: s.labelWrapper,
      passwordButton: clsx(s.passwordButton, disabled && s.buttonDisabled),
      searchButton: clsx(s.searchButton, disabled && s.buttonDisabled),
    }

    const inputId = useGetId(id)

    const isSearchType = type === 'search'
    const isPasswordType = type === 'password'

    const isShowClearButton = isSearchType && clearField && restProps?.value

    const finalType = type === 'password' && !isShowPassword ? 'password' : 'text'

    const onShowPasswordToggle = () => {
      setIsShowPassword(prevValue => !prevValue)
    }

    return (
      <div className={classNames.container}>
        {label && (
          <div className={classNames.label}>
            <label htmlFor={inputId}>
              <Typography variant={'body2'}>{label}</Typography>
            </label>
          </div>
        )}

        <div className={classNames.inputWrapper}>
          <input
            className={classNames.input}
            disabled={disabled}
            id={inputId}
            type={finalType}
            {...restProps}
            ref={ref}
          />

          {isSearchType && (
            <button className={classNames.searchButton} disabled={disabled} type={'button'}>
              {<Search />}
            </button>
          )}

          {isPasswordType && (
            <button
              className={classNames.passwordButton}
              disabled={disabled}
              onClick={onShowPasswordToggle}
              type={'button'}
            >
              {isShowPassword ? <EyeOff /> : <Eye />}
            </button>
          )}

          {isShowClearButton && !error && (
            <button className={classNames.clearButton} onClick={clearField} type={'button'}>
              <Close color={'currentColor'} />
            </button>
          )}
        </div>

        {!!error && (
          <span className={classNames.error}>
            <Typography className={classNames.errorCaption} variant={'caption'}>
              {error}
            </Typography>
          </span>
        )}
      </div>
    )
  }
)
