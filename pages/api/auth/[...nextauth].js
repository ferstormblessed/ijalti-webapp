import NextAuth from "next-auth/next";

import Auth0Provider from "next-auth/providers/auth0";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    /* Vamos a hacer un arreglo donde tendremos nuestros
    proveedores de servicios de autentificacion */
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ]
})