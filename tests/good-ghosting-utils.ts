import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { WinnersAnnouncement } from "../generated/good_ghosting/good_ghosting"

export function createWinnersAnnouncementEvent(
  winners: Array<Address>
): WinnersAnnouncement {
  let winnersAnnouncementEvent = changetype<WinnersAnnouncement>(newMockEvent())

  winnersAnnouncementEvent.parameters = new Array()

  winnersAnnouncementEvent.parameters.push(
    new ethereum.EventParam("winners", ethereum.Value.fromAddressArray(winners))
  )

  return winnersAnnouncementEvent
}
