# ADR: Sharing Source Code Between Teams and Integrating Products for Large Scale React.js Project

## Context and Problem Statement

In our large-scale React.js project, different teams are working on various features and components. Sharing source code efficiently between teams and integrating their contributions seamlessly is crucial for maintaining consistency, reducing duplication, and ensuring smooth collaboration.

## Decision Drivers

1. **Modularity**: Encourages modular design and reuse of components.
2. **Collaboration**: Facilitates collaboration between teams.
3. **Versioning**: Manages versions and dependencies effectively.
4. **Integration**: Ensures seamless integration of different parts of the application.
5. **Scalability**: Scales with the growing codebase and team size.
6. **Tooling**: Supports our existing tools and workflows.

## Considered Options

1. **Monorepo (with tools like Lerna or Nx)**
2. **Micro Frontends**
3. **Shared Component Libraries (with tools like Storybook)**
4. **Git Submodules**
5. **Private NPM Packages**

### Option 1: Monorepo (with tools like Lerna or Nx)

**Description**: A monorepo is a single repository that stores code for multiple projects. Tools like Lerna or Nx help manage dependencies and versioning within a monorepo.

#### Pros
- **Consistency**: Ensures consistent dependencies and configurations across projects.
- **Collaboration**: Easier collaboration and code sharing between teams.
- **Tooling**: Supports tools and workflows that enhance productivity (e.g., Lerna, Nx).

#### Cons
- **Complexity**: Can become complex to manage as the codebase grows.
- **Build Times**: Longer build times for large repositories.

### Option 2: Micro Frontends

**Description**: Micro frontends involve breaking down the frontend into smaller, independently deployable pieces that are integrated into the main application.

#### Pros
- **Independence**: Teams can work independently and deploy their changes without affecting others.
- **Scalability**: Scales well with the growing codebase and team size.
- **Resilience**: Failures in one micro frontend do not affect the entire application.

#### Cons
- **Integration**: Can be challenging to integrate and maintain consistency across micro frontends.
- **Complexity**: Adds complexity to deployment and testing processes.

### Option 3: Shared Component Libraries (with tools like Storybook)

**Description**: Creating shared component libraries that are used across different projects. Storybook helps in developing and documenting these components.

#### Pros
- **Reusability**: Promotes reuse of components across projects.
- **Documentation**: Tools like Storybook provide excellent documentation and visualization.
- **Consistency**: Ensures consistent UI and behavior across projects.

#### Cons
- **Versioning**: Managing versions and dependencies can be challenging.
- **Coordination**: Requires coordination between teams to ensure compatibility.

### Option 4: Git Submodules

**Description**: Git submodules allow you to keep a Git repository as a subdirectory of another Git repository.

#### Pros
- **Separation**: Keeps repositories separate but linked.
- **Independence**: Teams can manage their repositories independently.

#### Cons
- **Complexity**: Can be cumbersome to manage and update submodules.
- **Tooling**: Limited tooling support compared to other options.

### Option 5: Private NPM Packages

**Description**: Publishing shared code as private NPM packages that can be consumed by different projects.

#### Pros
- **Modularity**: Encourages modular design and code reuse.
- **Versioning**: NPM provides built-in versioning and dependency management.
- **Distribution**: Easy distribution of shared code via NPM registry.

#### Cons
- **Overhead**: Requires setting up and maintaining a private NPM registry.
- **Coordination**: Ensuring compatibility and updates across packages can be challenging.

## Decision Outcome

### Chosen Approach: **Monorepo with Nx and Shared Component Libraries with Storybook**

For our large-scale React.js project, we recommend using a **Monorepo** managed with **Nx** in combination with **Shared Component Libraries** documented with **Storybook**:

- **Monorepo with Nx**: This approach ensures consistency and facilitates collaboration by keeping all code in a single repository. Nx provides powerful tools for managing dependencies, running tasks, and optimizing builds, which helps mitigate some of the complexities associated with monorepos.
- **Shared Component Libraries with Storybook**: Creating shared component libraries promotes reuse and consistency across projects. Storybook enhances this by providing a platform for developing, testing, and documenting components in isolation.

This combination ensures that we have a scalable and maintainable solution for sharing source code and integrating products across teams.

## Links

- [Lerna](https://lerna.js.org/)
- [Nx](https://nx.dev/)
- [Storybook](https://storybook.js.org/)
- [Micro Frontends](https://micro-frontends.org/)
- [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Private NPM Packages](https://docs.npmjs.com/creating-and-publishing-private-packages)
