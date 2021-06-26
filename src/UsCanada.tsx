import React, { Component, MouseEvent } from "react"
import data from "./data/dataUsCanada"
import Province from "./StateProvince"
import drawDetails from "./svgUtilsUsCanada"

interface Props {
  onClick: (province: Provinces, event: MouseEvent) => void
  width: number
  height: number
  fillColor: string
  onHoverColor: string
  customize: { [key in Provinces]?: ProvinceCustomizations }
}

export enum Provinces {
  BC = "BC",
  AB = "AB",
  SK = "SK",
  MB = "MB",
  ON = "ON",
  QC = "QC",
  NB = "NB",
  NS = "NS",
  PE = "PE",
  NL = "NL",
  YT = "YT",
  NT = "NT",
  NU = "NU",
  AL = "AL",
  AK = "AK",
  AZ = "AZ",
  AR = "AR",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  FL = "FL",
  GA = "GA",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VA = "VA",
  WA = "WA",
  DC = "DC",
  WV = "WV",
  WI = "WI",
  WY = "WY",
  GOV = "GOV",
  DIP = "DIP",
  CON = "CON",
}

export interface ProvinceCustomizations {
  fillColor?: string
  onHoverColor?: string
}

class UsCanada extends Component<Props> {
  public static defaultProps = {
    onClick: (): void => {},
    width: 1113,
    height: 942,
    fillColor: "#D3D3D3",
    onHoverColor: "#ffffff",
    customize: {},
  }

  fillProvinceColor = (province: string): string => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].fillColor
    ) {
      return this.props.customize[province].fillColor
    }
    return this.props.fillColor
  }

  fillProvinceHoverColor = (province: string): string => {
    if (
      this.props.customize &&
      this.props.customize[province] &&
      this.props.customize[province].onHoverColor
    ) {
      return this.props.customize[province].onHoverColor
    }
    return this.props.onHoverColor
  }

  buildProvinces = () => {
    const paths = []
    const prov_data = data["default"]
    for (const province in prov_data) {
      const path = (
        <Province
          key={province}
          dimensions={prov_data[province]["dimensions"]}
          provinceAbbreviation={province}
          provinceName={prov_data[province]["name"]}
          fillColor={this.fillProvinceColor(province)}
          onHoverColor={this.fillProvinceHoverColor(province)}
          onClick={(e: MouseEvent) =>
            this.props.onClick(Provinces[province], e)
          }
        />
      )
      paths.push(path)
    }
    return paths
  }

  render() {
    return (
      <svg
        className="uscanada-map"
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox="-24500 -15050 55700 32000"
      >
        {this.buildProvinces()}
      </svg>
    )
  }
}

export default UsCanada
