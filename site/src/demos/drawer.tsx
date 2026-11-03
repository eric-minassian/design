import { Button } from "@/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer"

export const notes =
  "A sheet you can throw away with a thumb. Prefer it on touch screens, and use a plain sheet where nobody is going to drag anything."

export function Bottom() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Choose model</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Model</DrawerTitle>
          <DrawerDescription>Applies to the next turn in this thread.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>Keep Sonnet</DrawerClose>
          <DrawerClose render={<Button />}>Switch to Opus</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export function FromTheSide() {
  return (
    <Drawer showSwipeHandle swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>Open changes</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Changes</DrawerTitle>
          <DrawerDescription>4 files on t3/checkout-flake.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <ul className="space-y-1.5 font-mono text-xs">
            <li>src/checkout/payment.ts</li>
            <li>src/checkout/payment.test.ts</li>
            <li>src/cart/totals.ts</li>
            <li>playwright.config.ts</li>
          </ul>
        </DrawerPanel>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Commit</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export function SnapPoints() {
  return (
    <Drawer showSwipeHandle snapPoints={["16rem", 1]}>
      <DrawerTrigger render={<Button variant="outline" />}>Agent log</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Agent log</DrawerTitle>
          <DrawerDescription>Drag up to read the full run.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <pre className="font-mono text-xs leading-relaxed">
            {"read src/checkout/payment.ts\nedit src/checkout/payment.ts\nrun pnpm test --filter checkout\n3 passed, 0 failed"}
          </pre>
        </DrawerPanel>
      </DrawerContent>
    </Drawer>
  )
}
