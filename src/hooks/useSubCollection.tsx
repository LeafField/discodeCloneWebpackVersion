import React, { useState, useEffect } from "react";
import {
  collection,
  CollectionReference,
  DocumentData,
  onSnapshot,
  orderBy,
  Query,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelecter } from "../app/hooks";

interface Messages {
  timestamp: Timestamp;
  messages: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelecter((state) => state.channel.channelId);

  useEffect(() => {
    let colectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrder = query(
      colectionRef,
      orderBy("Timestamp", "desc")
    );

    onSnapshot(collectionRefOrder, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().Timestamp,
          messages: doc.data().messages,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId]);

  return { subDocuments };
};

export default useSubCollection;
