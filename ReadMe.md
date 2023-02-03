# Tech Used

## Using the psql console:

A quick <b>yarn db:console </b> command will launch you into a postgres console. This runs inside the ‘postgres’ service container, so you don’t even have to have postgres (which includes the psql utility) installed locally.

## Deploying migrations:<br/>

The command <b>yarn db:migrate</b> will update the database in a production environment.

## Developing and running migrations locally:<br/>

Locally, we can use the command<b> yarn docker:db:migrate</b> to synchronize database changes inside Docker.

## Rolling back a migration locally:<br/>

The command <b>yarn docker:db:migrate:undo</b> rolls back your last migration, which is super-helpful for testing out migrations locally.

## Rebuilding containers: <br/>

We can use the <b>yarn rebuild:backend</b> command to rebuild our ‘backend’ service container anytime we update dependencies.

<br/><br/>

- Swc: <a href="https://swc.rs/"><i>Rust-based compiler </i></a>
- Volta: <a href="https://volta.sh/"><i>Rust-based JS tool manager</i></a>
- Prisma: <a href="https://www.prisma.io/"><i>Rust-based Typescript ORM</i></a>
- Docker:<a href="https://www.docker.com/products/docker-desktop/"><i> Container</i></a>
- Morgan: <a href="https://www.npmjs.com/package/morgan"><i> Debugger </i> </a>
- Knex: <a href="https://knexjs.org/guide/migrations.html#seed-cli"><i>CLI Migration </i></a>
- Postgresql: <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"><i>SQL DB</i></a>
