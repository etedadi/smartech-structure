# ADR: API Design

## Context and Problem Statement

Effective API design is crucial for ensuring smooth interactions between our frontend React.js application and backend services. The API must be reliable, scalable, and easy to maintain, providing a clear and consistent contract between the client and server.

## Decision Drivers

1. **Consistency**: Ensures a consistent and predictable API design.
2. **Scalability**: Supports the growth of the application and data.
3. **Performance**: Optimizes data transfer and reduces latency.
4. **Security**: Implements robust security practices.
5. **Documentation**: Provides clear and comprehensive documentation.
6. **Ease of Integration**: Facilitates easy integration with frontend and other services.

## Considered Options

1. **REST (Representational State Transfer)**
2. **GraphQL**
3. **gRPC (Google Remote Procedure Calls)**
4. **JSON-RPC**
5. **OpenAPI / Swagger**

### Option 1: REST

**Description**: REST is an architectural style for designing networked applications. It uses HTTP requests to access and manipulate resources, typically represented in JSON or XML.

#### Pros
- **Simplicity**: Easy to understand and implement.
- **Widely Used**: Extensive support and tooling available.
- **Stateless**: Each request from a client contains all the information needed by the server.

#### Cons
- **Over-fetching/Under-fetching**: Clients may receive more or less data than needed, leading to inefficiencies.
- **No Built-in Validation**: Requires additional mechanisms for validation and error handling.

### Option 2: GraphQL

**Description**: GraphQL is a query language for APIs and a runtime for executing queries by providing a complete and understandable description of the data.

#### Pros
- **Flexibility**: Clients can request exactly the data they need.
- **Strong Typing**: Schema-driven approach provides clear contract and validation.
- **Single Endpoint**: All queries and mutations are handled through a single endpoint.

#### Cons
- **Complexity**: Can be more complex to set up and requires understanding of GraphQL schema and queries.
- **Overhead**: May introduce additional overhead in terms of query processing and optimization.

### Option 3: gRPC

**Description**: gRPC is a high-performance RPC framework that uses HTTP/2 for transport, Protocol Buffers for serialization, and provides features like bidirectional streaming.

#### Pros
- **Performance**: Highly efficient and supports streaming.
- **Strong Typing**: Uses Protocol Buffers for type-safe communication.
- **Support for Multiple Languages**: Supports multiple programming languages.

#### Cons
- **Complexity**: Requires learning and managing Protocol Buffers and gRPC-specific concepts.
- **Tooling**: Less mature ecosystem compared to REST and GraphQL for certain use cases.

### Option 4: JSON-RPC

**Description**: JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON. It allows for bi-directional communication between client and server.

#### Pros
- **Simplicity**: Simple protocol with minimal overhead.
- **Bi-directional Communication**: Supports request and response patterns.

#### Cons
- **Lack of Standards**: Less standardized and fewer tools compared to REST and GraphQL.
- **Less Mature**: Limited support and ecosystem compared to other options.

### Option 5: OpenAPI / Swagger

**Description**: OpenAPI (formerly known as Swagger) is a specification for defining APIs. It provides a standard format for describing REST APIs, including endpoints, request/response formats, and more.

#### Pros
- **Documentation**: Generates interactive API documentation and client SDKs.
- **Standardization**: Provides a standardized approach to API design.
- **Tooling**: Extensive tooling support for testing and validation.

#### Cons
- **REST Limitation**: Tied to RESTful APIs, not applicable to GraphQL or other protocols.
- **Maintenance**: Requires keeping the specification in sync with implementation.

## Decision Outcome

### Chosen Approach: **GraphQL with OpenAPI/Swagger for REST APIs**

For our large-scale React.js project, we recommend using **GraphQL** for complex data interactions and **OpenAPI/Swagger** for defining RESTful APIs:

- **GraphQL**: Provides a flexible and efficient way to query and manipulate data, allowing clients to request exactly what they need and reducing over-fetching and under-fetching issues.
- **OpenAPI/Swagger**: Offers a standardized approach to designing and documenting REST APIs, providing clear and interactive documentation, and ensuring consistency and validation.

This combination ensures that we have a powerful, flexible, and well-documented approach to API design, catering to different needs and use cases within our project.

## Links

- [GraphQL Official Website](https://graphql.org/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [gRPC Official Website](https://grpc.io/)
- [JSON-RPC Official Website](https://www.jsonrpc.org/)
- [Swagger Documentation](https://swagger.io/docs/)
