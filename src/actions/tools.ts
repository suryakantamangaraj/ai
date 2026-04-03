"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"

export async function toggleFavorite(toolId: string) {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error("Must be logged in to favorite tools.")
  }

  const userId = session.user.id

  const existingFavorite = await prisma.favorite.findUnique({
    where: {
      userId_toolId: {
        userId,
        toolId
      }
    }
  })

  let isFavorited = false

  if (existingFavorite) {
    await prisma.favorite.delete({
      where: {
        id: existingFavorite.id
      }
    })
    isFavorited = false
  } else {
    await prisma.favorite.create({
      data: {
        userId,
        toolId
      }
    })
    isFavorited = true
  }

  revalidatePath("/tools")
  return isFavorited
}
