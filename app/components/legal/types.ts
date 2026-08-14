export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalContactInfo = {
  name: string;
  address: string;
  email: string;
};

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
  contact?: LegalContactInfo;
};
