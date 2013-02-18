package com.asu.avatar.util;
/**
 * @author Vasu Gupta
 *
 */

import java.util.Map;

public class Utilities {
	// This Method returns a boolean value indicating the map passed as parameter is empty or not
	public static boolean isBlankMap(Map map)
	{
		if (map == null)
		{
			return true;
		}
		else if (map.keySet().size()==0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	// This Method returns a boolean value indicating the string passed as parameter is a null string or blank string
	public static boolean isBlankString(String value)
	{
		if ((value == null) || (value.trim().length() == 0))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
