import React from 'react';
import { Filter,Create,SimpleForm,ReferenceInput,SelectInput,List, Datagrid, TextField,TextInput, ReferenceField, EditButton, EmailField } from 'react-admin';

export const FoodList = props => (
    <List filters={<FoodFilter />}  {...props}>
        <Datagrid>
        <TextField source="rev_id" />
      <TextField source="rev_date" />
      <EmailField source="rev_rate" />
      <TextField source="rev_comment" />
      <TextField source="res_id" />
      <TextField source="user_id" />
            <EditButton />
        </Datagrid>
    </List>
);

export const FoodCreate = props => (
    <Create {...props}>
        <SimpleForm>
      <TextInput source="rev_id"  />
      <TextInput source="rev_date"/>
      <TextInput source="res_rate" />
      <TextInput source="rev_comment" />
      <TextInput source="res_id"/>
      <TextInput source="user_id" />
        </SimpleForm>
    </Create>
);

export const FoodFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Food" source="rev_id" reference="FoodList" allowEmpty>
            <SelectInput optionText="res_commeent " />
        </ReferenceInput>
    </Filter>
);