import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination"

export const notes =
  "Use it when people need to return to a specific page, like an audit log. For feeds and threads, load more as they scroll."

export function Default() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#/components/pagination" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#/components/pagination" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function Small() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#/components/pagination" size="icon-sm" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination" size="icon-sm">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#/components/pagination" size="icon-sm">3</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function PreviousAndNext() {
  return (
    <Pagination className="max-w-sm justify-between">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#/components/pagination" text="Newer" />
        </PaginationItem>
      </PaginationContent>
      <PaginationContent>
        <PaginationItem>
          <PaginationNext href="#/components/pagination" text="Older" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
