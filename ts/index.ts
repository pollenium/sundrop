import { Snowdrop } from 'pollenium-snowdrop'

export class Sundrop<T> extends Snowdrop<T> {

  private parentSnowdrop: Snowdrop<T> | null = null
  private parentHandleId: number | null = null

  setParentSnowdrop(parentSnowdrop: Snowdrop<T>): void {
    if (this.parentSnowdrop) {
      this.parentSnowdrop.removeHandleById(this.parentHandleId)
    }
    this.parentSnowdrop = parentSnowdrop
    this.parentHandleId = parentSnowdrop.addHandle((data) => {
      this.emit(data)
    })
  }
}
