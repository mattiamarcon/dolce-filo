"use client"

import { useActionState, useTransition } from "react"
import { login } from "@/app/action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export default function LoginForm() {
  const [state, formAction] = useActionState(login, { message: "" })
  const [isPending, startTransition] = useTransition()

  // Create a wrapper function that uses useTransition
  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <form className="space-y-8 w-full" action={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xl">
          Email
        </Label>
        <Input id="email" name="email" placeholder="La tua email" className="font-semibold" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="textxl">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="La tua password"
          className="font-semibold"
          required
        />
      </div>
      <Button className="w-full text-lg cursor-pointer" type="submit" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Accesso in corso...
          </>
        ) : (
          "Accedi"
        )}
      </Button>
      {state.message && <div className="text-red-500">{state.message}</div>}
    </form>
  )
}


