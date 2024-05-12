import { ComponentPropsWithoutRef, HTMLAttributes, ReactNode, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons/components/arrow-down'
import { clsx } from 'clsx'

import styles from './table.module.scss'

const Root = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => {
    return <table className={clsx(styles.root, className)} ref={ref} {...props} />
  }
)

const Head = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    return <thead className={clsx(styles.head, className)} ref={ref} {...props} />
  }
)

const Body = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    return <tbody className={clsx(styles.body, className)} ref={ref} {...props} />
  }
)

const Row = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => {
    return <tr className={clsx(styles.row, className)} ref={ref} {...props} />
  }
)

const HeadCell = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return <th className={clsx(styles.headCell, className)} ref={ref} {...props} />
  }
)

const Cell = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return <td className={clsx(styles.cell, className)} ref={ref} {...props} />
  }
)

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type HeadWithSortProps = {
  children: ReactNode
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & ComponentPropsWithoutRef<'thead'>

export const HeadWithSort = ({ columns, onSort, sort, ...restProps }: HeadWithSortProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <Head {...restProps}>
      <Row>
        {columns.map(({ key, sortable = true, title }) => (
          <HeadCell
            className={clsx(styles.headSort, sortable && styles.hover)}
            key={key}
            onClick={handleSort(key, sortable)}
          >
            {title}
            {sort && sort.key === key && (
              <span className={clsx(styles.arrow, sort.direction === 'desc' && styles.arrowUp)}>
                <ArrowDown />
              </span>
            )}
          </HeadCell>
        ))}
      </Row>
    </Head>
  )
}

export const Table = {
  Body,
  Cell,
  Head,
  HeadCell,
  HeadWithSort,
  Root,
  Row,
}
