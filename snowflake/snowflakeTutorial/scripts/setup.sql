-- Setup script for the Hello Snowflake! application.

-- create an application role named app_public
CREATE APPLICATION ROLE app_public;
-- create a schema to contain the stored procedure and grant the USAGE privilege on the schema to the application role.
CREATE SCHEMA IF NOT EXISTS core;
GRANT USAGE ON SCHEMA core TO APPLICATION ROLE app_public;

-- create stored procedure that outputs the string “Hello Snowflake!”.
CREATE OR REPLACE PROCEDURE CORE.HELLO()
  RETURNS STRING
  LANGUAGE SQL
  EXECUTE AS OWNER
  AS
  BEGIN
    RETURN 'Hello Snowflake!';
  END;

-- grant the USAGE privilege on the stored procedure to the application role.
--  This allows the setup script to create the stored procedure when the application is created.
--  It also give the application permission to run the stored procedure.
GRANT USAGE ON PROCEDURE core.hello() TO APPLICATION ROLE app_public;

--  create a versioned schema to contain the view and grant the USAGE privilege on the schema. 
CREATE OR ALTER VERSIONED SCHEMA code_schema;
GRANT USAGE ON SCHEMA code_schema TO APPLICATION ROLE app_public;

--  create the view in the code_schema schema and grant the required privilege on the view to the application role.
CREATE VIEW IF NOT EXISTS code_schema.accounts_view
  AS SELECT ID, NAME, VALUE
  FROM shared_data.accounts;
GRANT SELECT ON VIEW code_schema.accounts_view TO APPLICATION ROLE app_public;

--  include a Python UDF 
CREATE OR REPLACE FUNCTION code_schema.addone(i int)
RETURNS INT
LANGUAGE PYTHON
RUNTIME_VERSION = '3.8'
HANDLER = 'addone_py'
AS
$$
def addone_py(i):
  return i+1
$$;

--  grant the USAGE privilege on the function to the application role.
GRANT USAGE ON FUNCTION code_schema.addone(int) TO APPLICATION ROLE app_public;

--  create an external Python UDF that imports a Python module from a stage.
CREATE or REPLACE FUNCTION code_schema.multiply(num1 float, num2 float)
  RETURNS float
  LANGUAGE PYTHON
  RUNTIME_VERSION=3.8
  IMPORTS = ('/python/hello_python.py')
  HANDLER='hello_python.multiply';

GRANT USAGE ON FUNCTION code_schema.multiply(FLOAT, FLOAT) TO APPLICATION ROLE app_public;
