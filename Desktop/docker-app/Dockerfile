# Verwende das offizielle .NET SDK-Image zum Bauen der Anwendung
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . ./
RUN dotnet publish -c Release -o out

# Verwende das offizielle ASP.NET-Image für die Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "docker-app.dll"]
