import React, { useState, useEffect } from "react";
import {
  collection,
  CollectionReference,
  DocumentData,
  onSnapshot,
  Query,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapShot) => {
      const channelsResult: Channels[] = [];
      querySnapShot.docs.forEach((doc) =>
        channelsResult.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResult);
    });
  }, []);

  return { documents };
};

export default useCollection;
