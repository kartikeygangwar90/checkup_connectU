import { createContext, useEffect } from "react";
import React from "react";
import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp,
    query,
    orderBy
} from "firebase/firestore";
import { dataBase } from "../firebase";
import { useAuth } from "../AuthContext";

export const TeamContext = createContext();

export const TeamProvider = ({children}) => {
    const [teams, setTeams] = React.useState([]);
    const [loadingTeams, setLoadingTeams] = React.useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchTeams = async () => {
        try {
            const q = query (
                collection(dataBase, "teams"),
                orderBy("createdAt", "desc")
            );

            const snapshot = await getDocs(q);
            const teamList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setTeams(teamList);
        }catch(err) {
            console.log("Error fetching teams", err);
        }finally {
            setLoadingTeams(false);
        }
    };

    fetchTeams();
}, []);


    const addTeam = async (teamData) => {
        if(!user) return;

        const newTeam = {
            ...teamData,
            createdBy: user.uid,
            createdAt: serverTimestamp(),
        };

        const docRef = await addDoc(collection(dataBase, "teams"), newTeam);

        setTeams((prev) => [{ id: docRef.id, ...newTeam }, ...prev]);
    };

    return(
        <TeamContext.Provider value={{ teams, addTeam}}>
            {children}
        </TeamContext.Provider>
    );
};