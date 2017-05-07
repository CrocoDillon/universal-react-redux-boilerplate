// @flow
type HTTPStatus = 100|101|102|200|201|202|203|204|205|206|207|208|226|300|301|302|303|304|305|307|308|400|401|402|403|404|405|406|407|408|409|410|411|412|413|414|415|416|417|418|421|422|423|424|426|428|429|431|444|451|499|500|501|502|503|504|505|506|507|508|510|511|599

let status: HTTPStatus = 200

export default function (value: HTTPStatus): void {
  status = value
}

export function rewind(): HTTPStatus {
  const value = status
  status = 200
  return value
}
