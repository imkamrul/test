export type NotesType = {
  note: string | null;
  admin_note: string | null;
};

export type NotesJSONType = Record<string, NotesType>;
