"use server"

import { db } from "@/db"
import { CaseColor, CaseFinish, ShirtMaterial, PhoneModel, ShirtSize } from "@prisma/client"

export type SaveConfigArgs = {
  color: CaseColor
  finish: CaseFinish
  material: ShirtMaterial
  model: PhoneModel
  size: ShirtSize
  configId: string
}

export async function saveConfig({
  color, 
  finish, 
  material, 
  size,
  model, 
  configId,
}: SaveConfigArgs) {
  try {
  await db.configuration.update({
    where: {
      id: configId
    },
    data: {
      color,
      finish,
      material,
      size,
      model
    }
  })} catch (err) {
    console.log(err)
  }
}