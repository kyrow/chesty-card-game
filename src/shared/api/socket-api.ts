import io, { Socket } from "socket.io-client";


export class SocketApi {
	static socket: null | Socket = null

	static createConnection() {
		this.socket = io('https://localhost:3001')

		this.socket?.on("connect", () => {
			console.log('connected')
		})

		this.socket?.on("disconnect", (e) => {
			console.log('disconnected by error =', e)
		})
	}

}