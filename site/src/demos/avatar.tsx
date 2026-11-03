import { BotIcon, CheckIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/avatar"

export const notes =
  "Always set a fallback, because images fail. Two initials are enough, and the hairline ring keeps the shape on any surface."

export function Sizes() {
  return (
    <>
      <Avatar size="sm"><AvatarFallback>EM</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>EM</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>EM</AvatarFallback></Avatar>
    </>
  )
}

export function WithImage() {
  return (
    <>
      <Avatar>
        <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback><BotIcon className="size-4" /></AvatarFallback>
      </Avatar>
    </>
  )
}

export function WithBadge() {
  return (
    <>
      <Avatar>
        <AvatarFallback>TB</AvatarFallback>
        <AvatarBadge className="bg-success" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>EM</AvatarFallback>
        <AvatarBadge><CheckIcon /></AvatarBadge>
      </Avatar>
    </>
  )
}

export function Group() {
  return (
    <AvatarGroup>
      <Avatar><AvatarFallback>EM</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>TB</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>JL</AvatarFallback></Avatar>
      <AvatarGroupCount>+4</AvatarGroupCount>
    </AvatarGroup>
  )
}
